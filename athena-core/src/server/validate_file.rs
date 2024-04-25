use crate::files_management::validate_spec::validate_spec;
use axum::{http::StatusCode, response::IntoResponse, Json};

pub async fn validate(Json(spec_json): Json<String>) -> impl IntoResponse {
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
