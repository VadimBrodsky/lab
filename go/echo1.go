// Echo1 prints its command line arguments, like the unix echo
package main

import (
	"fmt"
	"os"
)

func main() {
	var s, sep string
	for i := 2; i < len(os.Args); i++ {
		s += sep + os.Args[i]
		sep = " "
	}
	fmt.Println(s)
}
