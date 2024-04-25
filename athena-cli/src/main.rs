use athena_core::{files_management::create_spec::create_spec_sync, server::serve};
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
        #[arg(short, long)]
        spec_path: Option<String>,
    },
    Generate {
        #[arg(short, long)]
        spec_path: Option<String>,
    },
    Serve {
        #[arg(short, long)]
        spec_path: Option<String>,
    },
    Init {
        #[arg(short, long)]
        spec_path: Option<String>,
    },
}

fn main() {
    let args: Args = Args::parse();

    match args.cmd {
        Commands::Validate { spec_path } => println!("Validating {:?}", spec_path),
        Commands::Generate { spec_path } => println!("Generating {:?}", spec_path),
        Commands::Serve { spec_path } => serve(spec_path),
        Commands::Init { spec_path } => {
            if let Err(e) = create_spec_sync(spec_path) {
                eprintln!("Error creating spec: {}", e);
                std::process::exit(1);
            }
        }
    }
}
