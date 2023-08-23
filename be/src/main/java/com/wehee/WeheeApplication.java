package com.wehee;

import com.wehee.config.properties.AppProperties;
import com.wehee.config.properties.ChatProperties;
import com.wehee.config.properties.CorsProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
	CorsProperties.class,
	AppProperties.class,
	ChatProperties.class
})
public class WeheeApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeheeApplication.class, args);
	}

}
