use std::net::SocketAddr;

use axum::{routing::get, Router};
use tokio::net::TcpListener;

#[tokio::main]
pub async fn serve() -> () {
    let app: Router = Router::new().route("/", get(|| async { "Hello, World!" }));

    let listener: TcpListener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    let address: SocketAddr = listener.local_addr().unwrap();
    println!("Athena ready on : {}", address);
    axum::serve(listener, app).await.unwrap();
}
