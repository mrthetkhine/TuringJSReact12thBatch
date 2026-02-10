package main

import "fmt"

func div(a int, b int) (int, error) {
	if b == 0 {
		return 0, fmt.Errorf("division by zero")
	}
	return a / b, nil
}

func main() {
	var data int
	data = 3 / 2
	//data = "Hello"
	fmt.Println("Data ", data)
	fmt.Println("Hello World")
	result, err := div(10, 2)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}
}
