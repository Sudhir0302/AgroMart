package com.sudhir03.agro_mart.service;

import com.sudhir03.agro_mart.model.User;
import com.sudhir03.agro_mart.model.UserPrincipal;
import com.sudhir03.agro_mart.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Fetching the user from the database
        User user = repo.findByUsername(username);

        if (user == null) {
            System.out.println("User 404");
            throw new UsernameNotFoundException("User not found");
        }

        // Returning UserPrincipal object
        return new UserPrincipal(user);
    }
}
