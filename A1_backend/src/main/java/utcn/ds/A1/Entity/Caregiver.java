package utcn.ds.A1.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "caregiver")
public class Caregiver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String address;
    private String birth_date;
    private String gender;
    private String name;
    //@OneToMany
    //@JoinColumn
    //private List<Patient> caregiver_patients;
    @OneToMany(mappedBy = "caregiver")
    private List<Patient> patients;


}
