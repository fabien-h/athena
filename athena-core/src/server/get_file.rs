use crate::files_management::read_spec::read_spec;
use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use std::sync::Arc;

use super::AppState;

pub async fn get(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let spec_path: Option<&str> = state.spec_path.as_deref();

    match read_spec(spec_path).await {
        Ok(spec) => Ok(Json(spec)),
        Err(e) => {
            println!("Failed to read spec file: {:?}", e);
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to read spec file".to_string(),
            ))
        }
    }
}
