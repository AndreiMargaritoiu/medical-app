package utcn.ds.A1.Persistence.API;


public interface RepositoryFactory {

    PatientRepository createPatientRepository();

    DoctorRepository createDoctorRepository();

    CaregiverRepository createCaregiverRepository();

    MedicationRepository createMedicationRepository();

}
