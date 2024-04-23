use athena_core::models::spec::spec::{APISpecGlobal, APISpecService};
use gloo_console::log;
use patternfly_yew::prelude::{Button, ButtonVariant};
use serde::{Deserialize, Serialize};
use wasm_bindgen::JsCast;
use web_sys::{EventTarget, HtmlInputElement};
use yew::prelude::*;
use yewdux::prelude::*;

#[derive(Default, Clone, PartialEq, Store)]
struct State {
    count: isize,
}

#[function_component]
fn ViewCount() -> Html {
    let (state, _) = use_store::<State>();
    html!(state.count)
}

#[derive(PartialEq)]
enum ButtonType {
    Increment,
    Decrement,
}

#[derive(Properties, PartialEq)]
struct ButtonProps {
    button_type: ButtonType,
}

#[function_component]
fn IncrementCount(props: &ButtonProps) -> Html {
    let (_, dispatch) = use_store::<State>();
    let inc: isize = if props.button_type == ButtonType::Increment {
        1
    } else {
        -1
    };
    let onclick = dispatch.reduce_mut_callback(|counter| counter.count += 1);

    html! {
        <Button variant={ButtonVariant::None} {onclick}>
            if props.button_type == ButtonType::Increment {
                {"+1"}
            } else {
                {"-1"}
            }
        </Button>
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Default, Store, Clone)]
pub struct APISpecState {
    pub name: String,
    pub version: String,
    pub description: String,
    pub global: APISpecGlobal,
    pub services: Vec<APISpecService>,
}

#[function_component(Home)]
pub fn home() -> Html {
    let (state, dispatch) = use_store::<APISpecState>();
    let onclick = dispatch
        .reduce_mut_callback(|spec| spec.name = "Salut, c’est le nom de mon API.".to_string());

    let input_value_handle = use_state(String::default);
    let input_value = (*input_value_handle).clone();

    let oninput: Callback<InputEvent> = {
        let input_value_handle = input_value_handle.clone();
        Callback::from(move |e: InputEvent| {
            let target: Option<EventTarget> = e.target();
            let input = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());
            if let Some(input) = input {
                dispatch.reduce_mut(|state| state.description = input.value());
                input_value_handle.set(input.value());
            }
        })
    };

    html! {
        <div class="container text-center">
            <ul>
                <li>{"state.name"} {state.name.clone()}</li>
                <li>{"state.version"} {state.version.clone()}</li>
                <li>{"state.description"} {state.description.clone()}</li>
            </ul>

            <label for="cautious-input">
                { "My cautious input:" }
                <input oninput={oninput}
                    id="cautious-input"
                    type="text"
                    value={input_value.clone()}
                />
            </label>

            <Button variant={ButtonVariant::None} {onclick}>
                {"Set le name"}
            </Button>

            <header class="space-y-8">
                <p>
                    <a href="https://yew.rs" target="_blank" rel="noopener noreferrer">
                        <img class="w-48 h-48 mx-auto mt-24" src="logo.svg" alt="Yew" />
                    </a>
                </p>
                <p>
                    <a id="learn_yew" class="text-emerald-800 underline" href="https://yew.rs" target="_blank" rel="noopener noreferrer">{ "Learn Yew" }</a>
                </p>
                <p>
                    { "Edit " } <code>{ "src/app/home.rs" }</code> { " and save to reload." }
                </p>
            </header>

            <ViewCount />
            <IncrementCount button_type={ButtonType::Increment} />
            <IncrementCount button_type={ButtonType::Decrement} />

            <Toto v="Hello Toto!" />
        </div>
    }
}

#[derive(Properties, PartialEq)]
struct TotoProps {
    v: Option<String>,
}

#[function_component(Toto)]
fn toto(props: &TotoProps) -> Html {
    println!("Hello you");
    println!("Hello you");
    println!("Hello you");

    html! {
        <div>
            <p>{ &props.v }</p>
        </div>
    }
}
