package routers

import (
	"api/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/ping", $controllers.MainController{})
}
