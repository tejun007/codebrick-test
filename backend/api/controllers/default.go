package controllers

import (
	"github.com/astaxie/beego"
)

// MainController is a base controller for api
type MainController struct {
	beego.Controller
}

func (this *MainController) Ping() {
	this.TplName = "index.html"
	this.Render()
}
