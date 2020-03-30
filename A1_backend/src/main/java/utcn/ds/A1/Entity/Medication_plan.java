package utcn.ds.A1.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Medication_plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String intake_intervals;
    private Timestamp start_plan;
    private Timestamp stop_plan;
    @OneToOne
    @JoinColumn
    private Doctor doctor;
    @OneToOne
    @JoinColumn
    private Patient patient;
    /*@OneToMany
    @JoinColumn
    //@JoinTable(name="Medication")
    private List<Medication> medications;*/
}
