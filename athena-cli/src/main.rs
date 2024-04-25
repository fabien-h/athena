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
    Validate {
        spec_path: String,
    },
    Generate {
        spec_path: String,
    },
    Serve {
        #[arg(short, long)]
        spec_path: Option<String>,
    },
}

fn main() {
    let args: Args = Args::parse();

    match args.cmd {
        Commands::Validate { spec_path } => println!("Validating {}", spec_path),
        Commands::Generate { spec_path } => println!("Generating {}", spec_path),
        Commands::Serve { spec_path } => serve(spec_path),
    }
}
