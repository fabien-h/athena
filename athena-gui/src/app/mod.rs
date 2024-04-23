use yew::prelude::*;
use yewdux::prelude::*;

pub mod home;

use home::Home;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <Home />
    }
}

#[derive(Store, Default, PartialEq, Debug)]
pub struct CounterStore {
    pub counter: usize,
}