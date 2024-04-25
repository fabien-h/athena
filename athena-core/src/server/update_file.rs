use super::AppState;
use crate::{files_management::write_spec::write_spec, models::spec::spec::APISpec};
use axum::{extract::State, http::StatusCode, response::IntoResponse, Json};
use std::sync::Arc;

pub async fn update(
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
