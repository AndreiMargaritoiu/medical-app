package utcn.ds.A1.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import utcn.ds.A1.DTO.CaregiverDTO;
import utcn.ds.A1.Service.CaregiverService;


import java.util.List;

@RestController
@RequiredArgsConstructor
public class CaregiversController {
    private final CaregiverService caregiverService;

    @GetMapping("/caregivers")
    public List<CaregiverDTO> readAll() {
        return caregiverService.listAll();
    }

    @PostMapping("/caregivers")
    public CaregiverDTO create(@RequestBody CaregiverDTO dto) {
        return caregiverService.create(dto);
    }

    @DeleteMapping("/caregivers/{id}")
    public void delete(@PathVariable int id) {
        caregiverService.remove(id);
    }

    @PutMapping("/caregivers/{id}")
    public CaregiverDTO update(@PathVariable int id, @RequestBody CaregiverDTO caregiverDTO) {
        return caregiverService.updateCaregiver(id, caregiverDTO);
    }

}
