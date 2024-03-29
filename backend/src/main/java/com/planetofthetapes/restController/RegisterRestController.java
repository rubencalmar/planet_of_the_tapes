package com.planetofthetapes.restController;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.planetofthetapes.entity.POrder;
import com.planetofthetapes.entity.User;
import com.planetofthetapes.repository.UserRepository;


@RestController
@RequestMapping("/api")
public class RegisterRestController{
	
	public interface UserDetails extends User.Basic, User.OrderRelationUser, POrder.Basic{}
	
	@Autowired
	private UserRepository userRepository;

	@JsonView(UserDetails.class)
	@RequestMapping(value="/register/add", method=RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User addUserRest(@RequestBody User user, HttpServletRequest request) {
			
		List<String> role = new ArrayList<String>();
		role.add("ROLE_USER");
		
		user.setAvatar("usern.png");
		user.setRoles(role);
		User newuser = new User(user.getName(), user.getPasswordHash(),user.getDni(), user.getEmail(), user.getTelephone(),
		user.getAddress(),user.getAvatar(),user.getRoles());

		userRepository.save(newuser);
		return user;
	}
}
