import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import FlashcardItem from './FlashcardItem'; // Import your FlashcardItem component

const FlashcardList = ({ category }) => {
  const allFlashcards = [
    {
      "category": "A",
      "question": "What are Enterprise Environmental Factors?",
      "answer": "Factors that affect the project but are not in control of project team"
    },
    {
      "category": "A",
      "question": "What are Organizational Process Assets?",
      "answer": "Internal factors that affect the project"
    },
    {
      "category": "A",
      "question": "What is the Project Management Body of Knowledge?",
      "answer": "A guide describing knowledge within the profession of project management"
    },
    {
      "category": "A",
      "question": "What is Generally Recognized Knowledge?",
      "answer": "Knowledge and practices that are generally applicable with consensus on usefulness"
    },
    {
      "category": "A",
      "question": "What are Good Practices?",
      "answer": "Practices that are generally believed to enhance the chances of delivering expected outcomes"
    },
    {
      "category": "A",
      "question": "What is The Standard for Project Management?",
      "answer": "Foundational reference for PMI's Project Manager's professional development program"
    },
    {
      "category": "A",
      "question": "What is the Project Management Institute?",
      "answer": "American nonprofit professional organization for project management"
    },
    {
      "category": "A",
      "question": "What is a Project?",
      "answer": "A project is a temporary endeavor undertaken to create a unique product, service, or result"
    },
    {
      "category": "A",
      "question": "What is Project Management?",
      "answer": "Application of knowledge, tools, techniques, and project activities to achieve project objectives"
    },
    {
      "category": "A",
      "question": "What is Program Management?",
      "answer": "Management of a group of projects and/or subsidiary programs together to achieve results that cannot be achieved while managing these components individually."
    },
    {
      "category": "A",
      "question": "What is Portfolio Management?",
      "answer": "Management of a group of programs and/or projects together to achieve organizational strategies and policies."
    },
    {
      "category": "A",
      "question": "What is Organizational Project Management?",
      "answer": "The strategy execution framework utilizing portfolio, program, and project management to produce better overall performance and sustainable competitive advantage."
    },
    {
      "category": "A",
      "question": "What are Project Management Processes?",
      "answer": "A series of activities that use input(s) to produce output(s), utilizing proper tools and techniques."
    },
    {
      "category": "A",
      "question": "What are Project Management Process Groups?",
      "answer": "Group of project management processes achieving specific project objectives."
    },
    {
      "category": "A",
      "question": "What is a Project Management Knowledge Area?",
      "answer": "Area of project management defined by its knowledge requirement."
    },
    {
      "category": "A",
      "question": "What is Tailoring?",
      "answer": "Selection of appropriate project management processes to effectively manage a project."
    },
    {
      "category": "A",
      "question": "What is a Project Management Office?",
      "answer": "A group in the organization responsible for standardization of processes, governance, and facilitation of resources, methodologies, and tools and techniques."
    },
    {
      "category": "A",
      "question": "Who is a Project Manager?",
      "answer": "The person assigned to lead the team responsible for carrying out the project activities."
    },
    {
      "category": "A",
      "question": "Who is a Functional Manager?",
      "answer": "The person assigned to lead the functional activities of the human resources."
    },
    {
      "category": "A",
      "question": "Who is an Operations Manager?",
      "answer": "The person assigned with the responsibility to ensure efficient business operations."
    },
    {
      "category": "A",
      "question": "What is Leadership?",
      "answer": "The knowledge, skills, and behaviors needed to guide, motivate, and direct a team towards attainment of objectives."
    },
    {
      "category": "A",
      "question": "What are Flowcharts?",
      "answer": "The sequence of steps that transforms one or more inputs into one or more outputs."
    },
    {
      "category": "A",
      "question": "What is Root Cause Analysis?",
      "answer": "A specific technique to identify a problem, discover the underlying causes that lead to it, and develop preventive action."
    },
    {
      "category": "A",
      "question": "What is Respect?",
      "answer": "Duty to show a high regard for ourselves, others, and the resources entrusted."
    },
    {
      "category": "A",
      "question": "What is Fairness?",
      "answer": "Duty to make decisions and act impartially and objectively and conduct that must be free from competing self-interest, prejudice, and favoritism."
    },
    {
      "category": "A",
      "question": "What is Honesty?",
      "answer": "Duty to understand the truth and to act in a truthful manner."
    },
    {
      "category": "A",
      "question": "What is Duty of Loyalty?",
      "answer": "A person's responsibility, legal or moral, to promote the best interest of an organization or other person with whom they are affiliated."
    },
    {
      "category": "A",
      "question": "What is Culture?",
      "answer": "Everything that people have, think, and do as members of their society and that is shared by at least one other person."
    },
    {
      "category": "A",
      "question": "What are Acceptance Criteria?",
      "answer": "A set of conditions that is required to be met before deliverables are accepted."
    },
    {
      "category": "A",
      "question": "What are Accepted Deliverables?",
      "answer": "Products, results, or capabilities produced by a project and validated by the customer, project sponsor as meeting their specified criteria."
    },
    {
      "category": "A",
      "question": "What is Authority?",
      "answer": "The right to apply project resources, expend funds, make decisions, or give approvals."
    },
    {
      "category": "A",
      "question": "What is a Budget?",
      "answer": "The approved estimate for a project, a work breakdown structure component, or any schedule activity."
    },
    {
      "category": "A",
      "question": "What is Change?",
      "answer": "A modification to any formally controlled deliverable, project management plan component, or project document."
    },
    {
      "category": "A",
      "question": "What is a Claim?",
      "answer": "A request, demand, or assertion of rights by a buyer against a seller or vice versa for consideration, compensation, or payment under the terms of a legally binding contract, such as for a disputed change."
    },
    {
      "category": "A",
      "question": "What is a Contract?",
      "answer": "A mutually binding agreement that obligates the seller to provide the specified product or service or result and obligates the buyer to pay for it."
    },
    {
      "category": "A",
      "question": "What are Criteria?",
      "answer": "Standards, rules, or tests on which a judgment or a decision can be based or by which a product, service, or result can be evaluated."
    },
    {
      "category": "A",
      "question": "What is an Estimate?",
      "answer": "A quantitative assessment of the likely amount of a variable, such as project costs, resources, efforts, or durations."
    },
    {
      "category": "A",
      "question": "What is a Methodology?",
      "answer": "A system of practices, techniques, procedures, and rules used by those who work in a discipline."
    },
    {
      "category": "A",
      "question": "What is a Milestone?",
      "answer": "A significant point or event in a project, program, or portfolio."
    },
    {
      "category": "A",
      "question": "What is an Opportunity?",
      "answer": "A risk that will have a positive effect on one or more project objectives."
    },
    {
      "category": "A",
      "question": "What is Tacit Knowledge?",
      "answer": "Personal knowledge that is difficult to articulate or share, such as beliefs, experiences, and insights."
    },
    {
      "category": "A",
      "question": "What is Agile?",
      "answer": "A project management methodology characterized by building products using short cycles of work that allow for rapid production and constant revision."
    },
    {
      "category": "A",
      "question": "What is Scrum?",
      "answer": "A framework for project management that emphasizes teamwork, accountability, and iterative progress toward a well-defined goal."
    },
    {
      "category": "A",
      "question": "What is the Kanban Method?",
      "answer": "A visual approach to project management where teams create physical representations of their tasks, often using sticky notes on whiteboards (or online apps)."
    },
    
      {
        "category": "B",
        "question": "What is a Project Scope Statement?",
        "answer": "A description of the project scope, major deliverables, assumptions, and constraints."
      },
      {
        "category": "B",
        "question": "What is a Work Breakdown Structure?",
        "answer": "Hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives."
      },
      {
        "category": "B",
        "question": "What are Work Packages?",
        "answer": "Planned work contained within the lowest level of WBS components."
      },
      {
        "category": "B",
        "question": "What is Decomposition?",
        "answer": "A technique used for dividing and subdividing the project scope and project deliverables into smaller, more manageable parts."
      },
      {
        "category": "B",
        "question": "What is a WBS Dictionary?",
        "answer": "A document that provides detailed deliverable, activity, and scheduling information about each component in the WBS."
      },
      {
        "category": "B",
        "question": "What is Project Schedule Management?",
        "answer": "Management of processes required to manage the timely completion of the project."
      },
      {
        "category": "B",
        "question": "What is the Precedence Diagramming Method?",
        "answer": "Activities graphically linked to show sequence in which activities are to be performed."
      },
      {
        "category": "B",
        "question": "What is a Project Management Information System?",
        "answer": "A scheduling software that has the capability to help plan, organize, and adjust the sequence of activities."
      },
      {
        "category": "B",
        "question": "What is a Resource Breakdown Structure?",
        "answer": "A document that provides a hierarchical structure of the identified resources by resource category."
      },
      {
        "category": "B",
        "question": "What are Resource Calendars?",
        "answer": "A document that provides availability of specific resources, type of resources, and resources with specific attributes."
      },
      {
        "category": "B",
        "question": "What is a Project Schedule Network Diagram?",
        "answer": "Diagrams that show both the project network logic and the project's critical path schedule activities."
      },
      {
        "category": "B",
        "question": "What is Project Cost Management?",
        "answer": "Management of processes required to maintain financial control of a project."
      },
      {
        "category": "B",
        "question": "What is an Expense?",
        "answer": "The cost of goods and services used up in the process of obtaining revenue."
      },
      {
        "category": "B",
        "question": "What is Interest?",
        "answer": "A charge made for the use of money."
      },
      {
        "category": "B",
        "question": "What is Project Quality Management?",
        "answer": "Managing the processes and activities regarding planning, managing and controlling project and product quality requirements."
      },
      {
        "category": "B",
        "question": "What are Ishikawa/Fish-Bone diagrams?",
        "answer": "Linking the undesirable effects to the assignable cause upon which the project team should implement corrective actions."
      },
      {
        "category": "B",
        "question": "What are Histograms?",
        "answer": "A special form of bar chart that are used to describe the central tendency, dispersion, and shape of a statistical distribution."
      },
      {
        "category": "B",
        "question": "What are Scatter Diagrams?",
        "answer": "Plot ordered pairs (X, Y) that seek to explain a change in the dependent variable, Y, in relationship to a change observed in the corresponding independent variable, X."
      },
      {
        "category": "B",
        "question": "What are Quality Reports?",
        "answer": "A document that records all quality-related issues escalated by the team, recommendations for the process, corrective actions, and the summary of control quality findings."
      },
      {
        "category": "B",
        "question": "What are Test and Evaluation Documents?",
        "answer": "Documents that are inputs to the Control Quality process and are used to evaluate the achievements of quality objectives."
      },
      {
        "category": "B",
        "question": "What is Project Resource Management?",
        "answer": "Management of processes to identify, acquire, and manage resources needed for successful completion of the project."
      },
      {
        "category": "B",
        "question": "What is a Hierarchical Organization Structure?",
        "answer": "An organizational structure where every entity in the organization, except one, is subordinate to a single other entity."
      },
      {
        "category": "B",
        "question": "What is an Organization Breakdown Structure?",
        "answer": "A breakdown structure that demonstrates Organizational Department, Units, teams, etc."
      },
      {
        "category": "B",
        "question": "What is Project Communication Management?",
        "answer": "Management of processes to meet Project and Stakeholders' information needs, through development of artifacts and implementation of activities to achieve information exchange."
      },
      {
        "category": "B",
        "question": "What is Project Risk Management?",
        "answer": "Management of processes to increase the probability and impact of positive risks and to decrease the probability and impact of negative risks."
      },
      {
        "category": "B",
        "question": "What is a Risk Management Plan?",
        "answer": "A plan that describes how risk management activities will be structured and performed."
      },
      {
        "category": "B",
        "question": "What is Project Procurement Management?",
        "answer": "Management of processes necessary to purchase or acquire products, services, or results needed from outside the project team."
      },
      {
        "category": "B",
        "question": "What is a Scope Baseline?",
        "answer": "A baseline that contains Scope statement, WBS, WBS dictionary."
      },
      {
        "category": "B",
        "question": "What is Project Stakeholder Management?",
        "answer": "Management of processes required to identify stakeholders, to analyze their expectations and impact, and to develop strategies for effective engagement."
      },
      {
        "category": "B",
        "question": "What is Activity Duration?",
        "answer": "The time in calendar units between start and finish of a scheduled activity."
      },
      {
        "category": "B",
        "question": "What are Agreements?",
        "answer": "Any communications or documents that define the initial intentions of the project. E.g., Contract, MoU, SLA, etc."
      },
      {
        "category": "B",
        "question": "What are Analytical Techniques?",
        "answer": "Various techniques used to evaluate, analyze, or forecast potential outcomes based on possible variations of the project or environmental variables and their relationship with other variables."
      },
      {
        "category": "B",
        "question": "What is a Baseline?",
        "answer": "Approved version of a work product that can be changed only through formal change control procedures and is used as a basis for comparison to actual results."
      },
      {
        "category": "B",
        "question": "What is a Business Case?",
        "answer": "A documented economic feasibility study used to establish the validity of a selected component lacking sufficient definition and that is used as a basis for authorization of further project management activities."
      },
      {
        "category": "B",
        "question": "What is Business Value?",
        "answer": "The net quantifiable benefit derived from a business endeavor."
      },
      {
        "category": "B",
        "question": "What is Change Control?",
        "answer": "A process whereby modifications to documents, deliverables, or baselines associated with the projects are identified, documented, approved, or rejected."
      },
      {
        "category": "B",
        "question": "What is a Change Management Plan?",
        "answer": "A component of the Project Management plan that establishes the change control board, documents the extents of authority, and describes how the change control system will be implemented."
      },
      {
        "category": "B",
        "question": "What is a Configuration Management Plan?",
        "answer": "A component of the Project Management plan that describes how to identify and account for project artifacts under configuration control, and how to record and report changes to them."
      },
      {
        "category": "B",
        "question": "What are Ground Rules?",
        "answer": "Expectations regarding acceptable behavior by project team members."
      },
      {
        "category": "B",
        "question": "What are Matrix Organizations?",
        "answer": "Any organization in which the project manager shares responsibilities with the functional managers for assigning priorities and for directing the work of persons assigned to the projects."
      },
      {
        "category": "B",
        "question": "What is a Performance Measurement Baseline?",
        "answer": "Integrated scope, schedule, or cost baselines used for comparison to manage, measure, and control project execution."
      },
      {
        "category": "B",
        "question": "What is a Risk Breakdown Structure?",
        "answer": "A hierarchical representation of potential sources of risk."
      },
 
   
          {
            "category": "C",
            "question": "What is trend analysis in project management?",
            "answer": "Trend analysis examines project performance over time to determine if performance is improving or deteriorating."
          },
          {
            "category": "C",
            "question": "What is rolling wave planning?",
            "answer": "Rolling wave planning is a technique where work to be accomplished in the near term is planned in detail, while work in the future is planned at a high level."
          },
          {
            "category": "C",
            "question": "What are control accounts?",
            "answer": "Control accounts are control points established at the work package level, which is one level above the work package."
          },
          {
            "category": "C",
            "question": "What does Finish to Start (FS) relationship mean?",
            "answer": "In a Finish to Start (FS) relationship, a successor activity cannot start until a predecessor activity has finished."
          },
          {
            "category": "C",
            "question": "Define Start to Start (SS) relationship.",
            "answer": "In a Start to Start (SS) relationship, a successor activity cannot start until a predecessor activity has started."
          },
          {
            "category": "C",
            "question": "What is the meaning of Start to Finish (SF) relationship?",
            "answer": "In a Start to Finish (SF) relationship, a successor activity cannot finish until a predecessor activity has started."
          },
          {
            "category": "C",
            "question": "Explain Finish to Finish (FF) relationship.",
            "answer": "In a Finish to Finish (FF) relationship, a successor activity cannot finish until a predecessor activity has finished."
          },
          {
            "category": "C",
            "question": "What are Mandatory Dependencies?",
            "answer": "Mandatory Dependencies are legally or contractually required or inherent in the nature of the work."
          },
          {
            "category": "C",
            "question": "What are Discretionary Dependencies?",
            "answer": "Discretionary Dependencies are preferred logic based on knowledge of best practices within a particular application area."
          },
          {
            "category": "C",
            "question": "What are External Dependencies?",
            "answer": "External Dependencies are relationships between project activities and non-project activities."
          },
          {
            "category": "C",
            "question": "What are Internal Dependencies?",
            "answer": "Internal Dependencies are precedence relationships between project activities that are generally within the project team's control."
          },
          {
            "category": "C",
            "question": "What does Leads mean in project scheduling?",
            "answer": "Leads refer to the amount of time a successor activity can be advanced with respect to a predecessor activity."
          },
          {
            "category": "C",
            "question": "Define Lags in project scheduling.",
            "answer": "Lags refer to the amount of time a successor activity will be delayed with respect to a predecessor activity."
          },
          {
            "category": "C",
            "question": "What is Analogous Estimating?",
            "answer": "Analogous Estimating is a technique for estimating the duration or cost of an activity or a project using historical data from a similar activity or project."
          },
          {
            "category": "C",
            "question": "What is Parametric Estimating?",
            "answer": "Parametric Estimating uses an algorithm to calculate cost or duration based on historical data and project parameters."
          },
          {
            "category": "C",
            "question": "What is Three-point Estimating?",
            "answer": "Three-point Estimating is a technique used to estimate cost or duration by applying an average or weighted average of optimistic, pessimistic, and most likely estimates."
          },
          {
            "category": "C",
            "question": "Define Most Likely Estimate.",
            "answer": "The Most Likely Estimate is the activity duration based on analysis of the realistic expectations for the activity."
          },
          {
            "category": "C",
            "question": "What is Optimistic Estimate?",
            "answer": "The Optimistic Estimate is the activity duration based on analysis of the best-case scenario for the activity."
          },
          {
            "category": "C",
            "question": "What does Pessimistic Estimate mean?",
            "answer": "The Pessimistic Estimate is the activity duration based on analysis of the worst-case scenario for the activity."
          },
          {
            "category": "C",
            "question": "What is Bottom-up Estimating?",
            "answer": "Bottom-up Estimating is a method of estimating project duration by aggregating the estimates of the lower-level components of the Work Breakdown Structure (WBS)."
          },
          {
            "category": "C",
            "question": "Explain Critical Path Method (CPM).",
            "answer": "The Critical Path Method is used to estimate the minimum project duration and determine the amount of scheduling flexibility on the logical network paths within the schedule model."
          },
          {
            "category": "C",
            "question": "What is Total Float?",
            "answer": "Total Float is the amount of time that a schedule activity can be delayed or extended from its early start date without delaying the project finish date."
          },
          {
            "category": "C",
            "question": "Define Resource Leveling.",
            "answer": "Resource Leveling is a technique in which start and finish dates are adjusted based on resource constraints to balance the demand for resources with the available supply."
          },
          {
            "category": "C",
            "question": "What is Resource Smoothing?",
            "answer": "Resource Smoothing adjusts the activities of a schedule model so that the requirements for resources do not exceed predefined limits."
          },
          {
            "category": "C",
            "question": "What is What-if Scenario Analysis?",
            "answer": "What-if Scenario Analysis is the process of evaluating scenarios to predict their effects, positively or negatively, on project activities."
          },
          {
            "category": "C",
            "question": "Explain Simulation in project management.",
            "answer": "Simulation involves calculating multiple project durations with different sets of activity assumptions, usually three-point estimates, to account for uncertainty."
          },
          {
            "category": "C",
            "question": "What is Schedule Compression?",
            "answer": "Schedule Compression includes techniques used to shorten the project duration without reducing the project scope."
          },
          {
            "category": "C",
            "question": "What does Crashing mean in project scheduling?",
            "answer": "Crashing is a technique used to shorten the schedule duration for the least incremental cost by adding resources."
          },
          {
            "category": "C",
            "question": "Define Fast Tracking.",
            "answer": "Fast Tracking is a technique in which phases or activities normally done in sequence are performed in parallel."
          },
          {
            "category": "C",
            "question": "What are Bar Charts?",
            "answer": "Bar Charts represent schedule information with activities listed on the vertical axis, dates on the horizontal axis, and durations shown as horizontal bars."
          },
          {
            "category": "C",
            "question": "What are Milestone Charts?",
            "answer": "Milestone Charts identify the scheduled start or completion of major deliverables and key external interfaces."
          },
          {
            "category": "C",
            "question": "What is Earned Value Analysis?",
            "answer": "Earned Value Analysis is used to assess the magnitude of variation from the original schedule baseline."
          },
          {
            "category": "C",
            "question": "What is an Iteration Burndown Chart?",
            "answer": "An Iteration Burndown Chart tracks the work that remains to be completed in the iteration backlog."
          },
          {
            "category": "C",
            "question": "Define Resource Optimization.",
            "answer": "Resource Optimization involves scheduling activities and resources considering both resource availability and project time."
          },
          {
            "category": "C",
            "question": "What is a Cost Estimate?",
            "answer": "A Cost Estimate is a quantitative assessment of the likely costs for resources required to complete the activity."
          },
          {
            "category": "C",
            "question": "What is Planned Value?",
            "answer": "Planned Value is the authorized budget assigned to scheduled work."
          },
          {
            "category": "C",
            "question": "Define Earned Value.",
            "answer": "Earned Value is a measure of the work performed expressed in terms of the budget authorized to that work."
          },
          {
            "category": "C",
            "question": "What is Actual Cost?",
            "answer": "Actual Cost is the realized cost incurred for work performed on an activity during a specific time period."
          },
          {
            "category": "C",
            "question": "What does Cost Variance represent?",
            "answer": "Cost Variance represents the amount of budget deficit or surplus at a given point in time, expressed as the difference between earned value and actual cost."
          },
          {
            "category": "C",
            "question": "Explain Schedule Variance.",
            "answer": "Schedule Variance is a metric that indicates whether the project is behind or ahead compared to the schedule baseline."
          },
          
            {
              "category": "D",
              "question": "What is an Imposed Date?",
              "answer": "A fixed date imposed on a schedule activity or schedule milestone, usually in the form of a 'start no earlier than' or 'finish no later than'."
            },
            {
              "category": "D",
              "question": "What is an Incentive Fee?",
              "answer": "A set of financial incentives related to cost, schedule, or technical performance of the seller."
            },
            {
              "category": "D",
              "question": "What are Influence Diagrams?",
              "answer": "A graphical representation of situations showing causal influences, time ordering of events, and other relationships among variables and outcomes."
            },
            {
              "category": "D",
              "question": "What is an Invitation for Bid?",
              "answer": "A Request for Proposal."
            },
            {
              "category": "D",
              "question": "What is a Management Reserve?",
              "answer": "An amount of the project budget or project schedule held outside the performance measurement baseline for management control purposes, reserved for unforeseen work within the scope of the project."
            },
            {
              "category": "D",
              "question": "What is a Master Schedule?",
              "answer": "A summary level project schedule that identifies the major deliverables, work breakdown structure components, and key schedule milestones."
            },
            {
              "category": "D",
              "question": "What is Path Convergence?",
              "answer": "A relationship in which a scheduled activity has more than one predecessor."
            },
            {
              "category": "D",
              "question": "What is Path Divergence?",
              "answer": "A relationship in which a scheduled activity has more than one successor."
            },
            {
              "category": "D",
              "question": "What are Procurement Audits?",
              "answer": "The review of contract and contracting processes for completeness, accuracy, and effectiveness."
            },
            {
              "category": "D",
              "question": "What are RACI Charts?",
              "answer": "A common type of responsibility assignment matrix that uses responsible, accountable, consult, and inform statuses to define the involvement of stakeholders in project activities."
            },
            {
              "category": "D",
              "question": "What is Risk Categorization?",
              "answer": "Organization by sources of risk, the area of the project affected, or other useful categories to determine areas of the project most exposed to the effects of uncertainty."
            },
            {
              "category": "D",
              "question": "What is a Risk category?",
              "answer": "A group of potential causes of risks."
            },
            {
              "category": "D",
              "question": "What is Risk Data Quality Assessment?",
              "answer": "A technique to evaluate the degree to which the data about risks is useful for risk management."
            },
            {
              "category": "D",
              "question": "What is Risk Enhancement?",
              "answer": "A risk response strategy whereby the team acts to increase the probability of occurrence or impact of an opportunity."
            },
            {
              "category": "D",
              "question": "What is Risk Escalation?",
              "answer": "A risk response strategy whereby the team acknowledges that the risk is outside of its sphere of influence and shifts the ownership of the risks to a higher level of the organization where it is more effectively managed."
            },
            {
              "category": "D",
              "question": "What is Risk Exploiting?",
              "answer": "A risk response strategy whereby the team acts to ensure that an opportunity occurs."
            },
            {
              "category": "D",
              "question": "What is Risk Exposure?",
              "answer": "An aggregate measure of the potential impact of all risks at any given point in time in a project, program, or portfolio."
            },
            {
              "category": "D",
              "question": "What is Risk Mitigation?",
              "answer": "A risk response strategy whereby the team acts to decrease the probability of occurrence or impact of a threat."
            },
            {
              "category": "D",
              "question": "Who is the Risk Owner?",
              "answer": "The person responsible for monitoring the risks and for selecting and implementing an appropriate risk response strategy."
            },
            {
              "category": "D",
              "question": "What is a Risk Threshold?",
              "answer": "The measure of acceptable variation around an objective that reflects the risk appetite of the organization and stakeholders."
            },
            {
              "category": "D",
              "question": "What is Risk Transference?",
              "answer": "A risk response strategy whereby the project team shifts the impact to a third party, together with ownership of the response."
            },
            {
              "category": "D",
              "question": "What is a Time and Material Contract?",
              "answer": "A type of contract that is a hybrid contractual agreement containing aspects of both cost-reimbursable and fixed-price contracts."
            },
            {
              "category": "D",
              "question": "What is a Threshold?",
              "answer": "A predetermined value of a measurable that represents a limit that requires actions to be taken if reached."
            },
            {
              "category": "D",
              "question": "What is the To-Complete Performance Index?",
              "answer": "A measure of the cost performance required to be achieved with the remaining resources to meet a specified management goal, expressed as the ratio of cost to finish the outstanding work to remaining budget."
            },
            {
              "category": "D",
              "question": "What is a Trigger Condition?",
              "answer": "An event or situation that indicates that a risk is about to occur."
            },
            {
              "category": "D",
              "question": "What is Unanimity?",
              "answer": "The agreement by everyone in the group on a single course of action."
            },
            {
              "category": "D",
              "question": "What is the Voice of the Customer?",
              "answer": "A planning technique used to provide products, services, and results that truly reflect customer requirements by translating those customer requirements into the appropriate technical requirements for each phase or project product development."
            },
            {
              "category": "D",
              "question": "What is Forming?",
              "answer": "The phase where team members meet and learn about the project and their formal roles and responsibilities."
            },
            {
              "category": "D",
              "question": "What is Storming?",
              "answer": "The team begins to address the project work, team decisions, and the project management approach."
            },
            {
              "category": "D",
              "question": "What is Norming?",
              "answer": "In this phase, team members begin to work together and adjust their work habits and behaviors to support the team."
            },
            {
              "category": "D",
              "question": "What is Performing?",
              "answer": "The team reaching the performing stage works as a well-organized unit. They are interdependent and work through issues smoothly and effectively."
            },
            {
              "category": "D",
              "question": "What is Adjourning?",
              "answer": "The team completes work and moves on from the project - this is the project closure phase."
            },
            {
              "category": "D",
              "question": "What does 'Lightweight' mean?",
              "answer": "'Lightweight' means that the overhead of the process is kept as small as possible, to maximize the amount of productive time available for getting useful work done."
            },
            {
              "category": "D",
              "question": "What are Automated Builds?",
              "answer": "Development of software that is regularly and automatically compiled, built, deployed, and tested."
            },
            {
              "category": "D",
              "question": "What is Continuous Integration?",
              "answer": "Integration activity in which development teams input their code into the system several times throughout the day."
            },
            {
              "category": "D",
              "question": "What is an Artifact?",
              "answer": "The product backlog, the sprint backlog, and the product increment are the three Scrum artifacts within a project."
            },
            {
              "category": "D",
              "question": "What is the Definition of Ready?",
              "answer": "A team's checklist for user-centric requirements that has all the information the team needs to be able to begin working on it."
            },
            {
              "category": "D",
              "question": "What is the Definition of Done?",
              "answer": "A team's checklist of all the criteria required to be met so that a deliverable can be considered ready for customer use."
            },
            {
              "category": "D",
              "question": "What is DevOps?",
              "answer": "A collection of practices for creating a smooth flow of delivery by improving collaboration between development and operations staff."
            },
            {
              "category": "D",
              "question": "What is T-shirt Sizing?",
              "answer": "One of the Story points sizing techniques used to estimate user stories usually in agile projects."
            },
            {
              "category": "D",
              "question": "What are Story Points?",
              "answer": "A unit of measurement of the overall effort needed to complete specific requirements of a product backlog item."
            },
            
              {
                "category": "E",
                "question": "What is Joint Application Design?",
                "answer": "The facilitated sessions focused on bringing business subject matter experts and the development team together to gather requirements and improve the software development process."
              },
              {
                "category": "E",
                "question": "What is Quality Function Deployment?",
                "answer": "A facilitation technique that helps determine critical characteristics for new product development by collecting customer needs and then sorting and objectively prioritizing the goals."
              },
              {
                "category": "E",
                "question": "What is the 100 Percent Rule?",
                "answer": "The total of the work at the lowest levels should roll up to the higher levels so that nothing is left out and no extra work is performed."
              },
              {
                "category": "E",
                "question": "What is Student Syndrome?",
                "answer": "People start to apply themselves only at the last possible moment."
              },
              {
                "category": "E",
                "question": "What is Parkinson's Law?",
                "answer": "Work expands to fill the time available for its completion."
              },
              {
                "category": "E",
                "question": "What is the Fist of Five technique?",
                "answer": "A technique in which the project manager asks the team to show their level of support for a decision by holding up the fist. Closed fist indicates no support; five fingers indicate full support."
              },
              {
                "category": "E",
                "question": "What is Monte Carlo Analysis?",
                "answer": "An analysis technique where a computer model is iterated many times, with the input value chosen at random for each iteration driven by the input data."
              },
              {
                "category": "E",
                "question": "What is Sunk Project Cost?",
                "answer": "A cost which has been irrevocably incurred by past actions."
              },
              {
                "category": "E",
                "question": "What is Project Opportunity Cost?",
                "answer": "The benefit which could be obtained by pursuing another course of action."
              },
              {
                "category": "E",
                "question": "What is a Tornado Diagram?",
                "answer": "One specific display of sensitivity analysis which is useful for comparing relatively uncertain variables to stable ones."
              },
              {
                "category": "E",
                "question": "What is Expected Monetary Value?",
                "answer": "A statistical concept that calculates the average outcome when the future includes scenarios that may or may not happen."
              },
              {
                "category": "E",
                "question": "What is the Stakeholder Cube?",
                "answer": "The model with multiple dimensions that improves the depiction of the stakeholder community as a multidimensional entity and assists with the development of communication strategies."
              },
              {
                "category": "E",
                "question": "What is Scope Creep?",
                "answer": "The uncontrolled expansion to product or project scope without adjustment to time, cost, and resources."
              },
              {
                "category": "E",
                "question": "What is an Anti-pattern?",
                "answer": "A known flawed pattern of work that is not advisable."
              },
              {
                "category": "E",
                "question": "What is Automated Code Quality Analysis?",
                "answer": "The scripted testing of the code base for bugs and vulnerabilities."
              },
              {
                "category": "E",
                "question": "What is Emotional Intelligence?",
                "answer": "The ability to identify, assess, and manage the personal emotions of oneself and others, as well as the collective emotions of a group."
              },
              {
                "category": "E",
                "question": "What is Hoshin Kanri?",
                "answer": "A strategy of policy deployment method."
              },
              {
                "category": "E",
                "question": "What is IDEAL?",
                "answer": "An organizational improvement model that is named after the five phases it describes: Initiating, Diagnosing, Establishing, Acting, Learning."
              },
              {
                "category": "E",
                "question": "What is Scrum ban?",
                "answer": "A management framework that emerges when teams employ Scrum as a chosen way of working and use the Kanban method as a lens through which to view, understand, and completely understand how they work."
              },
              {
                "category": "E",
                "question": "What is Scrum of Scrums?",
                "answer": "A technique to operate Scrum at scale for multiple teams working on the same product, coordinating discussions of progress on their interdependencies, and focusing on how to integrate the delivery of software, especially in areas of overlap."
              },
              {
                "category": "E",
                "question": "What is Autocratic Decision Making?",
                "answer": "One individual taking responsibility for making the decision for the group."
              },
              {
                "category": "E",
                "question": "What is a Requirements Traceability Matrix?",
                "answer": "A grid that links product requirements from their origin to the deliverables that satisfy them."
              },
              {
                "category": "E",
                "question": "What is a Code of Account?",
                "answer": "A numbering system used to uniquely identify each component of the Work Breakdown Structure (WBS)."
              },
              {
                "category": "E",
                "question": "What is Reserve Analysis?",
                "answer": "Used to determine the amount of contingency (also termed as schedule reserves) and management reserve needed for the project."
              },
              {
                "category": "E",
                "question": "What is Schedule Reserve?",
                "answer": "Estimated duration within the schedule baseline which is allocated for identified risks that are accepted."
              },
              {
                "category": "E",
                "question": "What is Sum-of-the-Years Digit Depreciation?",
                "answer": "An accelerated method of depreciation in which the depreciable cost is multiplied each year by the remaining years of useful life over the sum of the years of useful life."
              },
              {
                "category": "E",
                "question": "What is Double Declining Balance Depreciation?",
                "answer": "An accelerated method of depreciation in which the rate is double the straight-line rate."
              },
              {
                "category": "E",
                "question": "What is Design for X?",
                "answer": "A set of technical guidelines that are applied during the design of the product for the optimization of a specific aspect (X) of the design."
              },
              {
                "category": "E",
                "question": "What is Plurality?",
                "answer": "A decision made by the largest block in the group even if a majority is not achieved."
              },
              {
                "category": "E",
                "question": "What is an Information Radiator?",
                "answer": "A visible, physical display that provides information to the rest of the organization enabling up-to-the-minute knowledge sharing without having to disturb the team."
              },
              {
                "category": "E",
                "question": "What is Mobbing?",
                "answer": "A technique in which multiple team members focus simultaneously and coordinate their contributions on a particular work item."
              },
              {
                "category": "E",
                "question": "What is Refactoring?",
                "answer": "A product quality technique whereby the design of a product is improved by enhancing its maintainability and other desired attributes without altering its expected behavior."
              },
              {
                "category": "E",
                "question": "What is Swarming?",
                "answer": "A technique in which multiple team members focus collectively on resolving a specific impediment."
              },
              {
                "category": "E",
                "question": "What is Pair Programming?",
                "answer": "Programming in which two developers work as a team on one programming task. One person enters the code, while the second person plans the next steps while fitting the code into the whole picture."
              },
              {
                "category": "E",
                "question": "What is Mind Mapping?",
                "answer": "Consolidation of ideas created through individual brainstorming sessions into a single map to reflect commonality and differences in understanding and to generate new ideas."
              },
              {
                "category": "E",
                "question": "What is Depreciable Cost?",
                "answer": "The cost of an asset minus the estimated residual or salvage value."
              },
              {
                "category": "E",
                "question": "What is Unit of Output Depreciation?",
                "answer": "A depreciation method in which cost (minus residual value) is divided by the estimated units of lifetime output."
              },
              {
                "category": "E",
                "question": "What is Propinquity?",
                "answer": "The degree to which a risk is perceived to matter by one or more stakeholders."
              },
              {
                "category": "E",
                "question": "What is Funding Limit Reconciliation?",
                "answer": "The process of comparing the planned expenditure of project funds against any limits on the commitment of funds for the project to identify any variances between the funding limits and the planned expenditure."
              }
  ];

  const flashcards = category ? allFlashcards.filter(card => card.category === category) : allFlashcards;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // Initializing to -1 to handle the first question correctly
  const cardsPerPage = 1;
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('score');
    return savedScore !== null ? parseInt(savedScore, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleNextClick = () => {
    if ((currentPage + 1) * cardsPerPage < flashcards.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleKnowClick = () => {
    if (currentQuestionIndex !== currentPage) {
      setScore(score + 1);
      setCurrentQuestionIndex(currentPage);
    }
    handleNextClick();
  };

  const handleDontKnowClick = () => {
    if (currentQuestionIndex !== currentPage) {
      if (score > 0) {
        setScore(score - 1);
      }
      setCurrentQuestionIndex(currentPage);
    }
    handleNextClick();
  };

  const currentFlashcards = flashcards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  return (
    <Container>
      <Row className="justify-content-center">
        {currentFlashcards.map((flashcard, index) => (
          <Col key={index} style={{ height: '130px' }} md={6} lg={4} className="mb-3">
            <FlashcardItem question={flashcard.question} answer={flashcard.answer} />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Button onClick={handlePreviousClick} disabled={currentPage === 0} style={{ marginRight: '10px' }}>
            Previous
          </Button>
          <Button onClick={handleKnowClick} style={{ marginTop: '150px', marginRight: '200px' }}>
            I Know This
          </Button>
          <Button onClick={handleDontKnowClick} style={{ marginTop: '150px' }}>
            I Don't Know This
          </Button>
          <Button onClick={handleNextClick} disabled={(currentPage + 1) * cardsPerPage >= flashcards.length} style={{ marginLeft: '10px' }}>
            Next
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center" style={{ marginTop: '20px' }}>
          <h4>Score: {score}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashcardList;
