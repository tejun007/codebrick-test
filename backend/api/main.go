package main

import (
	"github.com/astaxie/beego"
)

const (
	APP_VER = "0.0.1"
)

func main() {
	beego.Info(beego.BConfig.AppName, APP_VER)

	beego.Run()
}

func errorHandler(err error) {

}
