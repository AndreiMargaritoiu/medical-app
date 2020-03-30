package utcn.ds.A1.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import utcn.ds.A1.DTO.PatientDTO;
import utcn.ds.A1.Service.PatientService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class PatientsController {
    private final PatientService patientService;

    @GetMapping("/patients")
    public List<PatientDTO> readAll() {
        return patientService.listAll();
    }

    @PostMapping("/patients")
    public PatientDTO create(@RequestBody PatientDTO dto) {
        return patientService.create(dto);
    }

    @PutMapping("/patients/{id}")
    public PatientDTO update(@PathVariable int id, @RequestBody PatientDTO patientDTO) {
        return patientService.updatePatient(id, patientDTO);
    }

    @DeleteMapping("/patients/{id}")
    public void delete(@PathVariable int id) {
        patientService.remove(id);
    }

}
