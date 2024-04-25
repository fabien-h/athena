use crate::{
    files_management::{
        create_spec::create_spec, read_spec::read_spec, validate_spec::validate_spec,
        write_spec::write_spec,
    },
    models::spec::spec::APISpec,
};
use axum::{
    extract::State,
    http::StatusCode,
    response::IntoResponse,
    routing::{get, post},
    Json, Router,
};
use std::{net::SocketAddr, sync::Arc};
use tokio::net::TcpListener;
use tracing_subscriber::util::SubscriberInitExt;

struct AppState {
    spec_path: Option<String>,
}

#[tokio::main]
pub async fn serve(spec_path: Option<String>) -> () {
    tracing_subscriber::registry().init();

    let app: Router = Router::new()
        .route("/get-spec", get(get_file))
        .route("/create-spec", get(create))
        .route("/validate-spec", post(validate))
        .route("/update-spec", post(update))
        .with_state(Arc::new(AppState { spec_path }));

    let listener: TcpListener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    let address: SocketAddr = listener.local_addr().unwrap();
    println!("Athena ready on : {}", address);
    axum::serve(listener, app).await.unwrap();
}

async fn get_file(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let spec_path: Option<&str> = state.spec_path.as_deref();

    match read_spec(spec_path).await {
        Ok(spec) => Ok(Json(spec)),
        Err(e) => {
            tracing::error!("Failed to read spec file: {:?}", e);
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to read spec file".to_string(),
            ))
        }
    }
}

async fn create(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let spec_path: Option<&str> = state.spec_path.as_deref();

    match create_spec(spec_path).await {
        Ok(_) => Ok("OK"),
        Err(e) => {
            tracing::error!("Failed to create spec file: {:?}", e);
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to create spec file".to_string(),
            ))
        }
    }
}

async fn validate(Json(spec_json): Json<String>) -> impl IntoResponse {
    match validate_spec(spec_json).await {
        Ok(()) => Ok(Json("Spec validation passed".to_string())),
        Err(e) => {
            tracing::error!("Spec validation failed: {:?}", e);
            Err((
                StatusCode::BAD_REQUEST,
                format!("Spec validation failed: {}", e),
            ))
        }
    }
}

async fn update(
    State(state): State<Arc<AppState>>,
    Json(spec): Json<APISpec>,
) -> impl IntoResponse {
    let spec_path: Option<&str> = state.spec_path.as_deref();

    match write_spec(spec_path, &spec).await {
        Ok(()) => Ok(Json("Spec updated successfully".to_string())),
        Err(e) => {
            tracing::error!("Failed to update spec file: {:?}", e);
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to update spec file".to_string(),
            ))
        }
    }
}
