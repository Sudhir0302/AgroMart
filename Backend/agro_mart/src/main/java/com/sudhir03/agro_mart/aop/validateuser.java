package com.sudhir03.agro_mart.aop;

import com.sudhir03.agro_mart.model.UserDTO;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class validateuser {

    private static final Logger LOGGER= LoggerFactory.getLogger(validateuser.class);

    @Around("execution(* com.sudhir03.agro_mart.controller.UserController.login(..))&&args(user)")
    public Object checkemail(ProceedingJoinPoint jp, UserDTO user) throws Throwable {

        Object obj= jp.proceed(new Object[]{user});
        LOGGER.info("user validated: "+obj);

        return obj;
    }
}
