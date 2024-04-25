use crate::files_management::create_spec::create_spec;
use axum::{extract::State, http::StatusCode, response::IntoResponse};
use std::sync::Arc;

use super::AppState;

pub async fn create(State(state): State<Arc<AppState>>) -> impl IntoResponse {
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
