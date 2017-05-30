// This is a comment
use std::f32::consts;

/*
 * This is a block comment
 */

// global constants
static MAX_HEALTH: i32 = 100;
static GAME_NAME: &'static str = "Monster Attack";

/// This is a doc comment, can use markdown here
/// The main function is the entry point of the program
fn main() {
    const LIFE: f32 = 42.0;
    println!("The Game you are playing is called {}", GAME_NAME);
    println!("You start with {} health points", MAX_HEALTH);
    println!("The meaning of life is {}", LIFE);
    println!("PI is {}", consts::PI);

    // give name to interpolated variable
    println!("You have {points}% health", points=70);

    // formattng interpoation with :
    println!("MAX_HEALTH is {:x} in hexadecimal", MAX_HEALTH);
    println!("MAX_HEALTH is {:b} in binary", MAX_HEALTH);
    println!("LIFE is {:e} in floating point", LIFE);


    // format! returns a formatted string instead of printing it
    format!("Invisible {}", "text");
}
