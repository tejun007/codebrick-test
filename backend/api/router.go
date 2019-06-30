package router

import "github.com/gorilla/mux"

func initRouter() {
	router := mux.NewRouter()

	api_v1 := router.PathPrefix("/apis/v1").Subrouter()
}
