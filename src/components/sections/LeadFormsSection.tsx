import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Building2, GraduationCap, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const programTracks = [
  { id: "foundation", label: "Foundation Track (18-24 months)" },
  { id: "core", label: "Core Track (12 months)" },
  { id: "intensive", label: "Intensive Track (6 months)" },
  { id: "crash", label: "Crash Revision (3 months)" },
];

const mbbsYears = [
  { value: "2nd", label: "2nd Year" },
  { value: "3rd", label: "3rd Year" },
  { value: "4th", label: "4th Year" },
  { value: "final", label: "Final Year" },
  { value: "internship", label: "Internship" },
  { value: "graduate", label: "Graduate" },
];

const LeadFormsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  // University Form State
  const [universityForm, setUniversityForm] = useState({
    institutionName: "",
    country: "",
    contactPerson: "",
    designation: "",
    email: "",
    whatsapp: "",
    studentCount: "",
    tracks: [] as string[],
  });

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    fullName: "",
    university: "",
    country: "",
    currentYear: "",
    intendedYear: "",
    email: "",
    whatsapp: "",
  });

  const handleUniversitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Request Received",
      description: "Our academic team will contact you within 48 hours to discuss the partnership opportunity.",
    });
    setUniversityForm({
      institutionName: "",
      country: "",
      contactPerson: "",
      designation: "",
      email: "",
      whatsapp: "",
      studentCount: "",
      tracks: [],
    });
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "Program details will be sent to your email shortly. Our counselor will contact you within 24 hours.",
    });
    setStudentForm({
      fullName: "",
      university: "",
      country: "",
      currentYear: "",
      intendedYear: "",
      email: "",
      whatsapp: "",
    });
  };

  const handleTrackChange = (trackId: string, checked: boolean) => {
    setUniversityForm(prev => ({
      ...prev,
      tracks: checked 
        ? [...prev.tracks, trackId]
        : prev.tracks.filter(t => t !== trackId)
    }));
  };

  return (
    <section ref={ref} className="py-20 md:py-28 gradient-section" id="forms">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-navy-100 text-navy-700 text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Connect With Us
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're an institution seeking academic partnership or a student looking for FMGE preparation support, we're here to help.
          </p>
        </motion.div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* University Form */}
          <motion.div
            id="university-form"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full p-8 rounded-2xl bg-card border border-navy-200 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-navy-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    For Universities & Institutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Request an Academic Partnership Discussion
                  </p>
                </div>
              </div>

              <form onSubmit={handleUniversitySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institutionName">Institution Name *</Label>
                    <Input
                      id="institutionName"
                      required
                      value={universityForm.institutionName}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, institutionName: e.target.value }))}
                      placeholder="University name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      required
                      value={universityForm.country}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, country: e.target.value }))}
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      required
                      value={universityForm.contactPerson}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, contactPerson: e.target.value }))}
                      placeholder="Full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="designation">Designation *</Label>
                    <Input
                      id="designation"
                      required
                      value={universityForm.designation}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, designation: e.target.value }))}
                      placeholder="Your role"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="uniEmail">Official Email *</Label>
                    <Input
                      id="uniEmail"
                      type="email"
                      required
                      value={universityForm.email}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="official@university.edu"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="uniWhatsapp">WhatsApp / Phone *</Label>
                    <Input
                      id="uniWhatsapp"
                      required
                      value={universityForm.whatsapp}
                      onChange={(e) => setUniversityForm(prev => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentCount">Number of Indian Students</Label>
                  <Input
                    id="studentCount"
                    value={universityForm.studentCount}
                    onChange={(e) => setUniversityForm(prev => ({ ...prev, studentCount: e.target.value }))}
                    placeholder="Approximate count"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Interested Program Track(s)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {programTracks.map((track) => (
                      <div key={track.id} className="flex items-center gap-2">
                        <Checkbox
                          id={track.id}
                          checked={universityForm.tracks.includes(track.id)}
                          onCheckedChange={(checked) => handleTrackChange(track.id, checked as boolean)}
                        />
                        <Label htmlFor={track.id} className="text-sm font-normal cursor-pointer">
                          {track.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" variant="navy" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Request Academic Discussion
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Student Form */}
          <motion.div
            id="student-form"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full p-8 rounded-2xl bg-card border border-teal-200 shadow-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    For Students
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Receive Program Details
                  </p>
                </div>
              </div>

              <form onSubmit={handleStudentSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={studentForm.fullName}
                    onChange={(e) => setStudentForm(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentUniversity">University *</Label>
                    <Input
                      id="studentUniversity"
                      required
                      value={studentForm.university}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, university: e.target.value }))}
                      placeholder="University name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentCountry">Country *</Label>
                    <Input
                      id="studentCountry"
                      required
                      value={studentForm.country}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, country: e.target.value }))}
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentYear">Current MBBS Year *</Label>
                    <select
                      id="currentYear"
                      required
                      value={studentForm.currentYear}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, currentYear: e.target.value }))}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select year</option>
                      {mbbsYears.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="intendedYear">Intended FMGE/NExT Year</Label>
                    <Input
                      id="intendedYear"
                      value={studentForm.intendedYear}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, intendedYear: e.target.value }))}
                      placeholder="e.g., 2026"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentEmail">Email *</Label>
                    <Input
                      id="studentEmail"
                      type="email"
                      required
                      value={studentForm.email}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentWhatsapp">WhatsApp Number *</Label>
                    <Input
                      id="studentWhatsapp"
                      required
                      value={studentForm.whatsapp}
                      onChange={(e) => setStudentForm(prev => ({ ...prev, whatsapp: e.target.value }))}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <Button type="submit" variant="teal" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Get Program Information
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormsSection;
