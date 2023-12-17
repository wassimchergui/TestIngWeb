package com.tptest.appStagiaire;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
class Stagiaire{
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String nom;
	private String prenom;
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	private String adressMail;


}

@Repository
interface StagiaireRepository extends JpaRepository<Stagiaire,Long> {

}

@CrossOrigin("*")
@RestController
class stagiaireRestControler {

	private StagiaireRepository stagiaireRepository;
	public stagiaireRestControler(StagiaireRepository stagiaireRepository) {
		this.stagiaireRepository = stagiaireRepository;
	}

	@GetMapping(path = "/stagiaires")
	public List<Stagiaire> getAllStagiaires() {
		return stagiaireRepository.findAll();
	}

	@GetMapping(value="/stagiaires/{id}")
	public Stagiaire getStg(@PathVariable(name="id") Long id){
		return stagiaireRepository.findById(id).get();
	}
	@PostMapping(value="/stagiaires")
	public Stagiaire saveStg(@RequestBody Stagiaire stg){
		return stagiaireRepository.save(stg);
	}

	@DeleteMapping(value="/stagiaires/{id}")
	public void deleteStg(@PathVariable(name="id") Long id){
		stagiaireRepository.deleteById(id);
	}

	@PutMapping(value="/stagiaires/{id}")
	public Stagiaire updateStg(@PathVariable(name="id") Long id, @RequestBody Stagiaire stg){
		stg.setId(id);
		return stagiaireRepository.save(stg);
	}


}




@SpringBootApplication
public class AppStagiaireApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppStagiaireApplication.class, args);
	}

	@Bean
	CommandLineRunner star(StagiaireRepository stagiaireRepository) {
		return  args ->{
			stagiaireRepository.save(new Stagiaire(null,"Aichaoui","Aicha",new Date("01/01/2000"), "aicha1.aicha1@adressemail.com"));
			stagiaireRepository.findAll().forEach(stg-> {System.out.println(stg.toString());});

		};
	}

}

