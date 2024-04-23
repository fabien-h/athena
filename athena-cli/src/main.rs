use athena_core::server::serve;
use clap::{Parser, Subcommand};

mod features;
mod io;

#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    #[command(subcommand)]
    cmd: Commands,
}

#[derive(Subcommand, Debug, Clone)]
enum Commands {
    Validate { path: String },
    Generate { path: String },
    Serve { path: String },
}

fn main() {
    let args: Args = Args::parse();

    match args.cmd {
        Commands::Validate { path } => println!("Validating {}", path),
        Commands::Generate { path } => println!("Generating {}", path),
        Commands::Serve { path } => {
            serve();
            println!("Serving {}", path);
        }
    }
}
