"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface EditProfileFormProps {
    username: string;
    profilePicture: string;
    onSave: (details: { username: string; profilePicture: string }) => void;
}

export default function EditProfileForm({ username, profilePicture, onSave }: EditProfileFormProps) {
    const [newUsername, setNewUsername] = useState(username);
    const [newProfilePictureURL, setNewProfilePictureURL] = useState(profilePicture);

    const handleSave = () => {
        onSave({ username: newUsername, profilePicture: newProfilePictureURL });
    };

    return (
        <div className="p-4 space-y-4">
            <div>
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div>
                <Label htmlFor="profilePictureURL">Profile Picture URL</Label>
                <Input
                    id="profilePictureURL"
                    type="text"
                    value={newProfilePictureURL}
                    onChange={(e) => setNewProfilePictureURL(e.target.value)}
                />
            </div>
            <Button onClick={handleSave}>Save</Button>
        </div>
    );
}