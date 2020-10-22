package com.eci.cosw.springbootsecureapi.model;

public class Task {

    private int id;
    private String descripcion;
    private String status;
    private String dueDate;
    private Responsable responsable;

    public Task(int id, String descripcion, String status, String dueDate, Responsable responsable) {
        this.id = id;
        this.descripcion = descripcion;
        this.status = status;
        this.dueDate = dueDate;
        this.responsable = responsable;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public Responsable getResponsable() {
        return responsable;
    }

    public void setResponsable(Responsable responsable) {
        this.responsable = responsable;
    }
}
