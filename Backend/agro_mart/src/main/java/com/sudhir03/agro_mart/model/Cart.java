package com.sudhir03.agro_mart.model;

import jakarta.persistence.*;

@Entity
@Table(name="cart")
public class Cart
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incrementing ID
    private int id;

    @Column(name="product")
    private String product;

    @Column(name="qnty")
    private float qnty;

    @Column(name="username")
    private String username;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public float getQnty() {
        return qnty;
    }

    public void setQnty(float qnty) {
        this.qnty = qnty;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "id=" + id +
                ", product='" + product + '\'' +
                ", qnty=" + qnty +
                ", username='" + username + '\'' +
                '}';
    }

}
