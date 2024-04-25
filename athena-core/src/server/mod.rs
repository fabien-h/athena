use axum::{
    response::Html,
    routing::{get, post},
    Router,
};
use std::{env, net::SocketAddr, sync::Arc};
use tokio::net::TcpListener;
use tower_http::services::ServeDir;
use tracing_subscriber::util::SubscriberInitExt;

mod create_file;
mod get_file;
mod update_file;
mod validate_file;

pub struct AppState {
    spec_path: Option<String>,
}

#[tokio::main]
pub async fn serve(spec_path: Option<String>) -> () {
    tracing_subscriber::registry().init();

    let app_assets_router =
        Router::new().nest_service("/assets", ServeDir::new("gui_build/assets"));

    let app: Router = Router::new()
        .route("/", get(root_get))
        .route("/get-spec", get(get_file::get))
        .route("/create-spec", get(create_file::create))
        .route("/validate-spec", post(validate_file::validate))
        .route("/update-spec", post(update_file::update))
        .merge(app_assets_router)
        .with_state(Arc::new(AppState { spec_path }));

    let listener: TcpListener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    let address: SocketAddr = listener.local_addr().unwrap();
    println!("Athena ready on : {}", address);
    axum::serve(listener, app).await.unwrap();
}

async fn root_get() -> impl axum::response::IntoResponse {
    let current_dir = env::current_dir().unwrap();
    let file_path = current_dir.join("gui_build/index.html");
    let markup = tokio::fs::read_to_string(file_path).await.unwrap();
    Html(markup)
}
