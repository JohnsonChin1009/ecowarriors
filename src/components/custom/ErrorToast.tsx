import { useToast } from "@/components/ui/use-toast";

export default function showErrorToast(title: string, description: string) {
    const { toast } = useToast();
    
    toast({
        title: title,
        description: description,
        variant: "destructive",
    });
}