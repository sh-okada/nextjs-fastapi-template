import abc

from app.domain.entity.profile import Profile


class IProfileRepository(abc.ABC):
    @abc.abstractmethod
    def create(self, profile: Profile):
        raise NotImplementedError()
