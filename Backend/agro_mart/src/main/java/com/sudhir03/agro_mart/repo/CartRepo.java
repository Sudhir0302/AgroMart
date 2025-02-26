package com.sudhir03.agro_mart.repo;

import com.sudhir03.agro_mart.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer> {
    List<Cart> findByUsername(String username);
}
