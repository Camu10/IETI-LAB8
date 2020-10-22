package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Task;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mashape.unirest.http.Unirest;

import java.util.List;

@RestController
@RequestMapping( "api" )
@CrossOrigin(origins = "*")
public class TaskController {

    @RequestMapping( value = "/allTask", method = RequestMethod.GET )
    public ResponseEntity<?> getAllTask(){
        List<Task> task;
        String stats;
        Gson gson = new GsonBuilder().create();
        try{
            stats = Unirest.get("https://ietilab7-task-api.azurewebsites.net/api/add-task?code=okVaEA9KV89dsB4Q9uG66sRVffDIUfmz4ngK8JV745IzUqY24VuJLw==")
                    .asString().getBody();

            task = gson.fromJson(stats,new TypeToken<List<Task>>(){}.getType());
            System.out.println(task);
            return new ResponseEntity<>(task, HttpStatus.ACCEPTED);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>("ERROR 500",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
