package utcn.ds.A1.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import utcn.ds.A1.DTO.MedicationDTO;
import utcn.ds.A1.Service.MedicationService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MedicationsController {
    private final MedicationService medicationService;

    @GetMapping("/medications")
    public List<MedicationDTO> readAll() {
        return medicationService.listAll();
    }

    @PostMapping("/medications")
    public MedicationDTO create(@RequestBody MedicationDTO dto) {
        return medicationService.create(dto);
    }

    @DeleteMapping("/medications/{id}")
    public void delete(@PathVariable int id) {
        medicationService.remove(id);
    }

    @PutMapping("/medications/{id}")
    public MedicationDTO update(@PathVariable int id, @RequestBody MedicationDTO medicationDTO) {
        return medicationService.updateMedication(id, medicationDTO);
    }

}
