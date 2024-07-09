package com.group_one.todo_list.controllers;

import com.group_one.todo_list.models.Category;
import com.group_one.todo_list.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/preferences")
public class CategoryController {


    @Autowired
    UserService userService;




    //adding a route to get all preference categories
    @GetMapping
    public ResponseEntity<List<Category>> getPreferences(){
        List<Category> preferencesArray = userService.getAllCategories();
        return new ResponseEntity<>(preferencesArray, HttpStatus.OK);
    }

}
