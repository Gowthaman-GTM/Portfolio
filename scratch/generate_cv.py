import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Flowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT
from reportlab.graphics.shapes import Drawing, Rect, String, Group, Circle, Path

class RoundedBanner(Flowable):
    def __init__(self, text, width, height=24, radius=10, bg_color=colors.HexColor("#E2E2E2"), text_color=colors.HexColor("#1A1A1A")):
        super().__init__()
        self.text = text
        self.width = width
        self.height = height
        self.radius = radius
        self.bg_color = bg_color
        self.text_color = text_color

    def wrap(self, availWidth, availHeight):
        self.width = availWidth
        return self.width, self.height

    def draw(self):
        canvas = self.canv
        canvas.saveState()
        canvas.setFillColor(self.bg_color)
        canvas.setStrokeColor(colors.transparent)
        canvas.roundRect(0, 0, self.width, self.height, self.radius, fill=1, stroke=0)
        
        canvas.setFillColor(self.text_color)
        canvas.setFont("Helvetica-BoldOblique", 11.5)
        canvas.drawString(16, (self.height - 11.5) / 2 + 2, self.text)
        canvas.restoreState()

def create_mail_icon():
    d = Drawing(16, 14)
    # Envelope outline
    d.add(Rect(0, 1, 14, 10, rx=1, ry=1, fillColor=colors.transparent, strokeColor=colors.HexColor("#1A1A1A"), strokeWidth=1.2))
    # Flap
    p = Path(strokeColor=colors.HexColor("#1A1A1A"), fillColor=colors.transparent, strokeWidth=1.2)
    p.moveTo(0, 11)
    p.lineTo(7, 5)
    p.lineTo(14, 11)
    d.add(p)
    return d

def create_phone_icon():
    d = Drawing(16, 14)
    # Phone handset shape
    p = Path(strokeColor=colors.HexColor("#1A1A1A"), fillColor=colors.HexColor("#1A1A1A"), strokeWidth=1)
    p.moveTo(2, 4)
    p.curveTo(2, 2, 4, 1, 6, 2)
    p.lineTo(7, 4)
    p.curveTo(7.5, 5, 7, 6, 6, 6.5)
    p.lineTo(7.5, 8)
    p.curveTo(8, 8.5, 9, 8, 9.5, 7.5)
    p.lineTo(11, 8.5)
    p.curveTo(12, 10.5, 10, 12, 8, 12)
    p.curveTo(4, 12, 1.5, 7, 2, 4)
    d.add(p)
    return d

def create_linkedin_icon():
    d = Drawing(16, 14)
    d.add(Rect(0, 0, 13, 13, rx=2, ry=2, fillColor=colors.HexColor("#0A66C2"), strokeColor=colors.transparent))
    d.add(String(2.5, 2.5, "in", fontName="Helvetica-Bold", fontSize=9, fillColor=colors.white))
    return d

def create_github_icon():
    d = Drawing(16, 14)
    d.add(Circle(6.5, 6.5, 6.5, fillColor=colors.HexColor("#181717"), strokeColor=colors.transparent))
    # Cat silhouette inner
    d.add(Circle(6.5, 5, 3.5, fillColor=colors.white, strokeColor=colors.transparent))
    d.add(Rect(4.5, 1, 4, 4, fillColor=colors.HexColor("#181717"), strokeColor=colors.transparent))
    return d

def create_cv_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    printable_width = A4[0] - 80  # 515.27 pt
    
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=colors.HexColor("#111111"),
        alignment=TA_LEFT
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12.5,
        leading=16,
        textColor=colors.HexColor("#111111"),
        alignment=TA_LEFT
    )
    
    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#111111")
    )
    
    contact_link_style = ParagraphStyle(
        'ContactLinkStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor("#111111")
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14.5,
        textColor=colors.HexColor("#222222"),
        alignment=TA_JUSTIFY
    )

    skill_style = ParagraphStyle(
        'SkillText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=15,
        textColor=colors.HexColor("#222222")
    )

    project_title_style = ParagraphStyle(
        'ProjectTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor("#111111")
    )

    project_desc_style = ParagraphStyle(
        'ProjectDesc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#222222")
    )

    edu_title_style = ParagraphStyle(
        'EduTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=colors.HexColor("#111111")
    )

    edu_sub_style = ParagraphStyle(
        'EduSub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#333333")
    )

    info_style = ParagraphStyle(
        'InfoText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#222222")
    )

    story = []

    # 1. Header
    story.append(Paragraph("ATPUTHATHEVARAJAH GOWTHAMAN", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("IT UNDERGRADUATE | AI & MACHINE LEARNING ENTHUSIAST", subtitle_style))
    story.append(Spacer(1, 14))

    # Contact Info Table with Vector Drawings
    mail_icon = create_mail_icon()
    phone_icon = create_phone_icon()
    linkedin_icon = create_linkedin_icon()
    github_icon = create_github_icon()

    email_p = Paragraph('AtputhathevarajahGowthaman5545@gmail.com', contact_style)
    phone_p = Paragraph('0771372806', contact_style)
    linkedin_p = Paragraph('<a href="https://www.linkedin.com/in/gowthaman-atputhathevarajah" color="#111111"><u>Gowthaman Atputhathevarajah</u></a>', contact_link_style)
    github_p = Paragraph('<a href="https://github.com/Gowthaman-GTM" color="#111111"><u>Gowthaman-GTM</u></a>', contact_link_style)

    contact_data = [
        [mail_icon, email_p, linkedin_icon, linkedin_p],
        [phone_icon, phone_p, github_icon, github_p]
    ]

    col_widths = [18, printable_width * 0.50 - 18, 18, printable_width * 0.50 - 18]
    contact_table = Table(contact_data, colWidths=col_widths)
    contact_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(contact_table)
    story.append(Spacer(1, 16))

    # 2. PROFILE
    story.append(RoundedBanner("PROFILE", printable_width))
    story.append(Spacer(1, 8))
    profile_p = Paragraph(
        "I have a strong interest in software development and computer programming, with a focus on Artificial "
        "Intelligence and Machine Learning. As an AI & Machine Learning enthusiast, I continuously learn new "
        "technologies and strengthen my technical knowledge. I am seeking an opportunity to gain practical "
        "experience, work on real projects, and apply AI and ML concepts to develop real-world solutions while "
        "contributing to the technical growth of an organization.",
        body_style
    )
    story.append(profile_p)
    story.append(Spacer(1, 14))

    # 3. TECHNICAL SKILLS
    story.append(RoundedBanner("TECHNICAL SKILLS", printable_width))
    story.append(Spacer(1, 8))
    
    col1_text = "Java<br/>Python<br/>C++"
    col2_text = "HTML<br/>CSS<br/>MySQL"
    col3_text = "Cybersecurity Basics<br/>React<br/>NodeJs"

    skills_data = [
        [Paragraph(col1_text, skill_style), Paragraph(col2_text, skill_style), Paragraph(col3_text, skill_style)]
    ]
    skills_table = Table(skills_data, colWidths=[printable_width / 3.0] * 3)
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 14))

    # 4. PROJECTS
    story.append(RoundedBanner("PROJECTS", printable_width))
    story.append(Spacer(1, 8))

    # Project 1
    story.append(Paragraph("Employee Leave Management System", project_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;• &nbsp;Developed a Java-based OOP system to manage employee records ,leave requests and leave approval - Java, MySql, JDBC", project_desc_style))
    story.append(Spacer(1, 8))

    # Project 2
    story.append(Paragraph("Game Development", project_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;• &nbsp;Developed a simple console-based application using C++ to improve programming fundamentals.", project_desc_style))
    story.append(Spacer(1, 8))

    # Project 3
    story.append(Paragraph("Task Management System – Group Project", project_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;• &nbsp;Developed a web-based task management system as part of a group project, including task and project management features using HTML, CSS, JavaScript, React, and MySQL. Contributed to the development, database integration, and deployment of the application.", project_desc_style))
    story.append(Spacer(1, 14))

    # 5. EDUCATION
    story.append(RoundedBanner("EDUCATION", printable_width))
    story.append(Spacer(1, 8))

    # Edu 1
    story.append(Paragraph("BSc (Hons) in Information Technology (Reading)", edu_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;Department of Industrial Management, University of Kelaniya 2025 - 2029", edu_sub_style))
    story.append(Spacer(1, 8))

    # Edu 2
    story.append(Paragraph("Diploma in Information Technology", edu_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;DMI Computer Education,Jaffna", edu_sub_style))
    story.append(Spacer(1, 8))

    # Edu 3
    story.append(Paragraph("Diploma in Fluent English", edu_title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("&nbsp;&nbsp;&nbsp;&nbsp;DMI Computer Education,Jaffna", edu_sub_style))
    story.append(Spacer(1, 14))

    # 6. ADDITIONAL INFORMATION
    story.append(RoundedBanner("ADDITIONAL INFORMATION", printable_width))
    story.append(Spacer(1, 8))

    story.append(Paragraph("&nbsp;&nbsp;• &nbsp;<b>Languages:</b> English ( Professional Proficiency), Tamil(Native).", info_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("&nbsp;&nbsp;• &nbsp;<b>Soft Skills:</b> Problem solving ,Time Management, Effective Communication, Critical Thinking", info_style))

    doc.build(story)
    print(f"Generated {filename} successfully.")

if __name__ == '__main__':
    os.makedirs("scratch", exist_ok=True)
    os.makedirs("public", exist_ok=True)
    create_cv_pdf("public/Gowthaman_Atputhathevarajah_CV.pdf")
    create_cv_pdf("public/Gowthaman_CV.pdf")
