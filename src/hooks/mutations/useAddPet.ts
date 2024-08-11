import { apiService } from "@/services";
import { useMutation } from "@tanstack/react-query";

export const useAddPetMutation = () => {
  return useMutation(apiService.addUserPet);
};
