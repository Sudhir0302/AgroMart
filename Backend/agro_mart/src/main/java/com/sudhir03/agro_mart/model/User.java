package com.sudhir03.agro_mart.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phoneno")
    private Long phoneno;

    public Long getPhoneno() {
        return phoneno;
    }

    public void setPhoneno(Long phoneno) {
        this.phoneno = phoneno;
    }

    public User() {}

    public User(int id, String username, String password, String email,Long phoneno) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneno=phoneno;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //for debugging
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", phoneno='" + phoneno + '\'' +
                '}';
    }
}
