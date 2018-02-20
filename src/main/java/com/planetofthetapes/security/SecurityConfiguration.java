package com.planetofthetapes.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.planetofthetapes.repository.UserRepositoryAuthenticationProvider;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthenticationProvider authenticationProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// PUBLIC PAGES
		http.authorizeRequests().antMatchers("/css/**", "/js/**", "/img/**", "/fonts/**").permitAll();
		http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/login").permitAll();
		http.authorizeRequests().antMatchers("/contact").permitAll();
		http.authorizeRequests().antMatchers("/plist").permitAll();
		http.authorizeRequests().antMatchers("/product").permitAll();
		http.authorizeRequests().antMatchers("/cart").permitAll();
		http.authorizeRequests().antMatchers("/selectpay").permitAll();
		
		// Private pages (all other pages)
        http.authorizeRequests().antMatchers("/home").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/selectpay").hasAnyRole("USER");
        http.authorizeRequests().antMatchers("/selectpay").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-userList").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-products").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-products-add").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-add-user").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-remove-product-action").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-remove-user-action").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/admin-userTable").hasAnyRole("ADMIN");
       
        

		// LOGIN
		http.formLogin().loginPage("/login");
		http.formLogin().usernameParameter("name");
		http.formLogin().passwordParameter("password");
		http.formLogin().defaultSuccessUrl("/");
		http.formLogin().failureUrl("/login");

		// LOGOUT
		http.logout().logoutUrl("/logout");
		http.logout().logoutSuccessUrl("/");
		
		http.csrf().disable();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(authenticationProvider);
	}

}