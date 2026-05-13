from sqlalchemy import Column, Integer, String
from database import Base

class TestExecution(Base):

    __tablename__ = "executions"

    id = Column(Integer, primary_key=True, index=True)

    prompt = Column(String)

    website = Column(String)

    status = Column(String)

    screenshot = Column(String)