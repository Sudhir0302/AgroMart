package com.sudhir03.agro_mart.model;

public class UserDTO {
    private String username;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;

    }

    @Override
    public String toString() {
        return "User{" +
                "username=" + username + '\'' +
                "password=" + password + '\'' +
                '}';
    }
}
