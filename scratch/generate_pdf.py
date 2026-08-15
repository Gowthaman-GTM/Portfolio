import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

def generate_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#1E293B'),
        alignment=0, # Left-aligned
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F172A'),
        alignment=0,
        spaceAfter=12
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#334155')
    )

    contact_link_style = ParagraphStyle(
        'ContactLink',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#0284C7')
    )

    section_banner_style = ParagraphStyle(
        'SectionBanner',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#1E293B'),
        spaceAfter=0
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#334155'),
        alignment=4 # Justified
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#0F172A')
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#334155'),
        leftIndent=15
    )

    story = []

    # Title & Subtitle
    story.append(Paragraph("ATPUTHATHEVARAJAH GOWTHAMAN", title_style))
    story.append(Paragraph("IT UNDERGRADUATE | AI &amp; MACHINE LEARNING ENTHUSIAST", subtitle_style))
    story.append(Spacer(1, 4))

    # Contact Block Table (2x2 grid)
    contact_data = [
        [
            Paragraph("✉ AtputhathevarajahGowthaman5545@gmail.com", contact_style),
            Paragraph('in <u><a href="https://www.linkedin.com/in/gowthaman-atputhathevarajah" color="#0284C7">Gowthaman Atputhathevarajah</a></u>', contact_link_style)
        ],
        [
            Paragraph("📞 0771372806", contact_style),
            Paragraph('<b>GitHub:</b> <u><a href="https://github.com/Gowthaman-GTM" color="#0284C7">Gowthaman-GTM</a></u>', contact_link_style)
        ]
    ]
    contact_table = Table(contact_data, colWidths=[240, 280])
    contact_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 14))

    def add_section_header(title_text):
        # Gray background banner pill like original CV
        banner_data = [[Paragraph(f"<b>{title_text}</b>", section_banner_style)]]
        banner_table = Table(banner_data, colWidths=[532])
        banner_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#E2E8F0')),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
            ('LEFTPADDING', (0,0), (-1,-1), 12),
            ('CORNERPAD', (0,0), (-1,-1), 8),
        ]))
        story.append(banner_table)
        story.append(Spacer(1, 8))

    # PROFILE
    add_section_header("PROFILE")
    profile_text = (
        "I have a strong interest in software development and computer programming, with a focus on "
        "Artificial Intelligence and Machine Learning. As an AI & Machine Learning enthusiast, I continuously "
        "learn new technologies and strengthen my technical knowledge. I am seeking an opportunity to gain "
        "practical experience, work on real projects, and apply AI and ML concepts to develop real-world solutions "
        "while contributing to the technical growth of an organization."
    )
    story.append(Paragraph(profile_text, body_style))
    story.append(Spacer(1, 14))

    # TECHNICAL SKILLS
    add_section_header("TECHNICAL SKILLS")
    skills_data = [
        [Paragraph("Java", body_style), Paragraph("HTML", body_style)],
        [Paragraph("Python", body_style), Paragraph("CSS", body_style)],
        [Paragraph("C++", body_style), Paragraph("MySQL", body_style)]
    ]
    skills_table = Table(skills_data, colWidths=[240, 280])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 14))

    # PROJECTS
    add_section_header("PROJECTS")
    story.append(Paragraph("Employee Leave Management System", item_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed a Java-based OOP system to manage employee records, leave requests and leave approval - Java, MySql, JDBC", bullet_style))
    story.append(Spacer(1, 8))
    
    story.append(Paragraph("Game Development", item_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("• Developed a simple console-based application using C++ to improve programming fundamentals.", bullet_style))
    story.append(Spacer(1, 14))

    # EDUCATION
    add_section_header("EDUCATION")
    story.append(Paragraph("BSc (Hons) in Information Technology (Reading)", item_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Department of Industrial Management, University of Kelaniya 2025 - 2029", bullet_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Diploma in Information Technology", item_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("DMI Computer Education, Jaffna", bullet_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Diploma in Fluent English", item_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("DMI Computer Education, Jaffna", bullet_style))
    story.append(Spacer(1, 14))

    # ADDITIONAL INFORMATION
    add_section_header("ADDITIONAL INFORMATION")
    story.append(Paragraph("• <b>Languages:</b> English ( Professional Proficiency), Tamil (Native).", bullet_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("• <b>Soft Skills:</b> Problem solving, Time Management, Effective Communication, Critical Thinking", bullet_style))

    doc.build(story)
    print(f"PDF generated successfully at: {filename}")

if __name__ == "__main__":
    out_dir = r"c:\Users\LEGION\Desktop\Portfolio\public"
    os.makedirs(out_dir, exist_ok=True)
    target_path = os.path.join(out_dir, "Gowthaman_Atputhathevarajah_CV.pdf")
    generate_pdf(target_path)
