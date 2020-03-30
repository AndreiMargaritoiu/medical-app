package utcn.ds.A1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utcn.ds.A1.Entity.Patient;
import utcn.ds.A1.Persistence.API.RepositoryFactory;
import utcn.ds.A1.Service.PatientService;

@SpringBootApplication
public class A1Application {

	public static void main(String[] args) { SpringApplication.run(A1Application.class, args); }

}
