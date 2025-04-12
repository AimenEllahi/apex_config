"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    zipCode: "",
    deliveryType: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      newsletter: checked,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jotformFormId = "YOUR_FORM_ID";
    const apiKey = "41ad20959213219038a11b4fe20996d2";

    const payload = {
      "submission[1]": formData.firstName,
      "submission[2]": formData.lastName,
      "submission[3]": formData.email,
      "submission[4]": formData.phone,
      "submission[5]": formData.company,
      "submission[6]": formData.zipCode,
      "submission[7]": formData.deliveryType,
      "submission[8]": formData.newsletter ? "Yes" : "No",
    };

    try {
      const res = await fetch(
        `https://api.jotform.com/form/${jotformFormId}/submissions?apiKey=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("Jotform response:", data);
      if (data.responseCode === 200) {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong submitting to Jotform.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting the form.");
    }
  };

  return (
    <div className="p-3 bg-white">
      <div className="mb-4 flex justify-end">
        <img src="/logo.png" alt="TRACK TEC" className="w-full h-full" />
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-600">
          Fill out the form below for a custom quote from your local dealer.
          After your dealer receives your configuration, they will contact you
          with a total purchase price.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="space-y-1">
            <Label htmlFor="firstName" className="text-sm">
              First Name:
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="lastName" className="text-sm">
              Last Name:
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">
              Email Address:
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">
              Phone Number:
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="company" className="text-sm">
              Company:
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="zipCode" className="text-sm">
              ZIP/Postal Code:
            </Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="deliveryType" className="text-sm">
              Delivery Type
            </Label>
            <Select
              value={formData.deliveryType}
              onValueChange={(value) =>
                handleSelectChange("deliveryType", value)
              }
            >
              <SelectTrigger id="deliveryType" className="h-8 text-sm w-full">
                <SelectValue placeholder="-- Select --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="residence">Residence</SelectItem>
                <SelectItem value="jobsite">Jobsite</SelectItem>
                <SelectItem value="freight_terminal">
                  Freight Terminal
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="newsletter" className="text-xs">
              Sign up for the latest products and special offers
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#ef4d28] hover:bg-orange-700 text-white mt-2 font-bold text-sm py-1"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
