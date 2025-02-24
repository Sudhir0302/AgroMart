package com.sudhir03.agro_mart.repo;

import com.sudhir03.agro_mart.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer> {

}
