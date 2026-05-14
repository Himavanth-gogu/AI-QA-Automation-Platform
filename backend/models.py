from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Float

from database import Base

class TestExecution(Base):

    __tablename__ = "executions"

    id = Column(Integer, primary_key=True, index=True)

    website = Column(String)

    title = Column(String)

    buttons_found = Column(Integer)

    links_found = Column(Integer)

    forms_found = Column(Integer)

    inputs_found = Column(Integer)

    images_found = Column(Integer)

    console_errors = Column(Integer)

    failed_requests = Column(Integer)

    execution_time = Column(Float)

    security_score = Column(String)

    ai_accuracy = Column(Float)

    screenshot = Column(String)

    report = Column(String)