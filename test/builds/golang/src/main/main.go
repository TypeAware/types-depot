package main

import (
	"fmt"
	"reflect"
)


type Foo = struct {
	F string `zoom:"1"`
}

type Bar struct {
	F string `zoom:"2"`
}

type Baz struct {
	F string `zoom:"3"`
}


func extractField(s []interface{}){
	for _, v := range s {
		t := reflect.TypeOf(v)
		f, _ := t.FieldByName("F")
		v, ok := f.Tag.Lookup("zoom")
		fmt.Println(v,ok)
		//log.Fatal(v,ok)
	}
}

func main(){

	extractField([]interface{}{Foo{},Bar{},Baz{}})
	//t := reflect.TypeOf(bar.Put{})
	//f, _ := t.FieldByName("F")
	//
	//fmt.Println(f.Tag) // one:"1" two:"2"blank:""
	//
	//v, ok := f.Tag.Lookup("zoom")
	//
	//log.Fatal(v,ok);

}