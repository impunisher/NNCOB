package br.com.elyontec.cobranca;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"br.com.elyontec.cobranca","br.com.elyontec.integracaosicoobclient"})
public class CobrancaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(CobrancaApiApplication.class, args);
	}

}
