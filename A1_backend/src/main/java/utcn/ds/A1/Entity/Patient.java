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
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String address;
    private String birth_date;
    @ManyToOne
    @JoinColumn(name="caregiver_id")
    private Caregiver caregiver;
    private String gender;
    private String medical_record;
    private String name;

}
