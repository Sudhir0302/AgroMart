package com.sudhir03.agro_mart.repo;

import com.sudhir03.agro_mart.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {

    User findByEmail(String email);
}
